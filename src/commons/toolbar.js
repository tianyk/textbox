import MediumEditor from 'medium-editor';

const CourseboxToolbar = MediumEditor.Extension.extend({
	name: 'coursebox-toolbar',

	/* Toolbar Options */

	/* allowMultiParagraphSelection: [boolean]
     * enables/disables whether the toolbar should be displayed when
     * selecting multiple paragraphs/block elements
     */
	allowMultiParagraphSelection: true,

	/* standardizeSelectionStart: [boolean]
     * enables/disables standardizing how the beginning of a range is decided
     * between browsers whenever the selected text is analyzed for updating toolbar buttons status.
     */
	standardizeSelectionStart: false,

	/* updateOnEmptySelection: [boolean]
     * When the __static__ option is true, this enables/disables updating
     * the state of the toolbar buttons even when the selection is collapsed
     * (there is no selection, just a cursor).
     */
	updateOnEmptySelection: false,

	/**
     * 初始化
     */
	init: function () {
		MediumEditor.Extension.prototype.init.apply(this, arguments);

		this.attachEventHandlers();
	},

	// Helper method to execute method for every extension, but ignoring the toolbar extension
	forEachExtension: function (iterator, context) {
		return this.base.extensions.forEach(function (command) {
			if (command === this) {
				return;
			}
			return iterator.apply(context || this, arguments);
		}, this);
	},


	// 销毁 toolbar 
	destroy: function () {
	},

	attachEventHandlers: function () {
		// MediumEditor custom events for when user beings and ends interaction with a contenteditable and its elements
		// 输入框获得或者失去焦点时 
		this.subscribe('blur', this.handleBlur.bind(this));
		this.subscribe('focus', this.handleFocus.bind(this));

		// Updating the state of the toolbar as things change
		this.subscribe('editableClick', this.handleEditableClick.bind(this));
		this.subscribe('editableKeyup', this.handleEditableKeyup.bind(this));

		// Handle mouseup on document for updating the selection in the toolbar
		this.on(this.document.documentElement, 'mouseup', this.handleDocumentMouseup.bind(this));
	},


	handleDocumentMouseup: function (event) {
		// Do not trigger checkState when mouseup fires over the toolbar
		// if (event &&
		//     event.target &&
		//     // mouseup 如果是操作按钮 return false 
		//     MediumEditor.util.isDescendant(this.getToolbarElement(), event.target)) {
		//     return false;
		// }
		this.checkState();
	},

	handleEditableClick: function () {
		// Delay the call to checkState to handle bug where selection is empty
		// immediately after clicking inside a pre-existing selection
		setTimeout(function () {
			this.checkState();
		}.bind(this), 0);
	},

	handleEditableKeyup: function () {
		this.checkState();
	},

	handleBlur: function () {
		this.hideToolbar();
	},

	handleFocus: function () {
		this.checkState();
	},


	/**
     * 设置 toolbar 可见
     */
	showToolbar: function () {
	},

	/**
     * 隐藏toolbar 
     */
	hideToolbar: function () {
	},


	// Responding to changes in user selection

	// Checks for existance of multiple block elements in the current selection
	multipleBlockElementsSelected: function () {
		/* eslint no-useless-escape:0 */
		let regexEmptyHTMLTags = /<[^\/>][^>]*><\/[^>]+>/gim, // http://stackoverflow.com/questions/3129738/remove-empty-tags-using-regex
			regexBlockElements = new RegExp('<(' + MediumEditor.util.blockContainerElementNames.join('|') + ')[^>]*>', 'g'),
			selectionHTML = MediumEditor.selection.getSelectionHtml(this.document).replace(regexEmptyHTMLTags, ''), // Filter out empty blocks from selection
			hasMultiParagraphs = selectionHTML.match(regexBlockElements); // Find how many block elements are within the html

		return !!hasMultiParagraphs && hasMultiParagraphs.length > 1;
	},

	checkState: function () {
		if (this.base.preventSelectionUpdates) {
			return;
		}

		// If no editable has focus OR selection is inside contenteditable = false
		// hide toolbar
		// 没有 focus 的 toolbar 隐藏 
		if (!this.base.getFocusedElement() ||
            MediumEditor.selection.selectionInContentEditableFalse(this.window)) {
			return this.hideToolbar();
		}

		// If there's no selection element, selection element doesn't belong to this editor
		// or toolbar is disabled for this selection element
		// hide toolbar
		// 没有选中元素，隐藏
		let selectionElement = MediumEditor.selection.getSelectionElement(this.window);
		if (!selectionElement ||
            this.getEditorElements().indexOf(selectionElement) === -1 ||
            selectionElement.getAttribute('data-disable-toolbar')) {
			return this.hideToolbar();
		}

		// Now we know there's a focused editable with a selection

		// If the updateOnEmptySelection option is true, show the toolbar
		if (this.updateOnEmptySelection && this.static) {
			// 显示按钮并且更新状态
			return this.showAndUpdateToolbar();
		}

		// If we don't have a 'valid' selection -> hide toolbar
		if (!MediumEditor.selection.selectionContainsContent(this.document) ||
            (this.allowMultiParagraphSelection === false && this.multipleBlockElementsSelected())) {
			return this.hideToolbar();
		}

		this.showAndUpdateToolbar();
	},

	// Updating the toolbar
	/**
     * 显示按钮并更新状态
     */
	showAndUpdateToolbar: function () {
		// this.modifySelection();
		this.showToolbar();
		// 设置按钮状态
		this.checkActiveButtons();
	},

	// isActive: function () {
	//     return this.button.classList.contains(this.getEditorOption('activeButtonClass'));
	// },

	// setInactive: function () {
	//     this.button.classList.remove(this.getEditorOption('activeButtonClass'));
	//     delete this.knownState;
	// },

	// setActive: function () {
	//     this.button.classList.add(this.getEditorOption('activeButtonClass'));
	//     delete this.knownState;
	// },

	// queryCommandState: function () {
	//     var queryState = null;
	//     if (this.useQueryState) {
	//         queryState = this.base.queryCommandState(this.getAction());
	//     }
	//     return queryState;
	// },

	isAlreadyApplied: function (node) {
		let isMatch = false,
			tagNames = this.getTagNames(),
			styleVals,
			computedStyle;

		if (this.knownState === false || this.knownState === true) {
			return this.knownState;
		}

		if (tagNames && tagNames.length > 0) {
			isMatch = tagNames.indexOf(node.nodeName.toLowerCase()) !== -1;
		}

		if (!isMatch && this.style) {
			styleVals = this.style.value.split('|');
			computedStyle = this.window.getComputedStyle(node, null).getPropertyValue(this.style.prop);
			styleVals.forEach(function (val) {
				if (!this.knownState) {
					isMatch = (computedStyle.indexOf(val) !== -1);
					// text-decoration is not inherited by default
					// so if the computed style for text-decoration doesn't match
					// don't write to knownState so we can fallback to other checks
					if (isMatch || this.style.prop !== 'text-decoration') {
						this.knownState = isMatch;
					}
				}
			}, this);
		}

		return isMatch;
	},

	checkActiveButtons: function () {
		let manualStateChecks = [],
			queryState = null,
			selectionRange = MediumEditor.selection.getSelectionRange(this.document),
			parentNode,
			updateExtensionState = function (extension) {
				if (typeof extension.checkState === 'function') {
					extension.checkState(parentNode);
				} else if (typeof extension.isActive === 'function' &&
                    typeof extension.isAlreadyApplied === 'function' &&
                    typeof extension.setActive === 'function') {
					if (!extension.isActive() && extension.isAlreadyApplied(parentNode)) {
						extension.setActive();
					}
				}
			};

		if (!selectionRange) {
			return;
		}

		// // Loop through all extensions
		// // 遍历所有扩展，如果 queryCommandState 返回true并且扩展有 setActive 方法，则调用扩展 setActive 方法
		// this.forEachExtension(function (extension) {
		//     // For those extensions where we can use document.queryCommandState(), do so
		//     if (typeof extension.queryCommandState === 'function') {
		//         queryState = extension.queryCommandState();
		//         // If queryCommandState returns a valid value, we can trust the browser
		//         // and don't need to do our manual checks
		//         if (queryState !== null) {
		//             if (queryState && typeof extension.setActive === 'function') {
		//                 extension.setActive();
		//             }
		//             return;
		//         }
		//     }
		//     // 如果 上面没有执行放到 manualStateChecks 列表中
		//     // We can't use queryCommandState for this extension, so add to manualStateChecks
		//     manualStateChecks.push(extension);
		// });

		parentNode = MediumEditor.selection.getSelectedParentElement(selectionRange);

		// Make sure the selection parent isn't outside of the contenteditable
		if (!this.getEditorElements().some(function (element) {
			return MediumEditor.util.isDescendant(element, parentNode, true);
		})) {
			return;
		}

		// Climb up the DOM and do manual checks for whether a certain extension is currently enabled for this node
		while (parentNode) {
			manualStateChecks.forEach(updateExtensionState);

			// we can abort the search upwards if we leave the contentEditable element
			if (MediumEditor.util.isMediumEditorElement(parentNode)) {
				break;
			}
			parentNode = parentNode.parentNode;
		}
	}
});