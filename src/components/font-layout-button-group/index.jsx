import './font-layout-button-group.less';

import { Component } from 'react';
import PropTypes from 'prop-types';
import SelectButton from '../select-button';
import classNames from 'classnames';
import ImageFontLayoutLeft from '@assets/images/左对齐_正常@2x.png';
import ImageFontLayoutCenter from '@assets/images/居中对齐_正常@2x.png';
import ImageFontLayoutRight from '@assets/images/右对齐_正常@2x.png';
import ImageFontLayoutJustify from '@assets/images/两侧对齐_正常@2x.png';

import ImageFontLayoutLeftSelected from '@assets/images/左对齐_选中@2x.png';
import ImageFontLayoutCenterSelected from '@assets/images/居中对齐_选中@2x.png';
import ImageFontLayoutRightSelected from '@assets/images/右对齐_选中@2x.png';
import ImageFontLayoutJustifySelected from '@assets/images/两侧对齐_选中@2x.png';

import ImageFontLayoutLeftDisabled from '@assets/images/左对齐_不可点@2x.png';
import ImageFontLayoutCenterDisabled from '@assets/images/居中对齐_不可点@2x.png';
import ImageFontLayoutRightDisabled from '@assets/images/右对齐_不可点@2x.png';
import ImageFontLayoutJustifyDisabled from '@assets/images/两侧对齐_不可点@2x.png';

const debug = require('@commons/debug')('textbox:font-layout-button-group');


class FontLayoutButtonGroup extends Component {
	constructor(props) {
		super(props);

		this.onFontLayoutChange = this.onFontLayoutChange.bind(this);
	}

	onFontLayoutChange(textAlign) {
		return (selected) => {
			debug('onFontLayoutChange %s %s', textAlign, selected);
			this.props?.onFontLayoutChange(selected ? textAlign : 'start');
		}
	}

	render() {
		const disabled = this.props.disabled;
		debug('disabled', disabled);
		const className = classNames(
			'coursebox-font-layout-button-group',
			this.props.className,
			{
				disabled
			}
		);

		return (
			<div className={className}>
				<SelectButton
					disabled={this.props.disabled}
					selected={this.props.textAlign === 'left' || this.props.textAlign === 'start'}
					icon={this.props.textAlign === 'left' ? ImageFontLayoutLeftSelected : ImageFontLayoutLeft}
					disabledIcon={ImageFontLayoutLeftDisabled}
					onSelected={this.onFontLayoutChange('left')}
				></SelectButton>

				<SelectButton
					disabled={this.props.disabled}
					selected={this.props.textAlign === 'center'}
					icon={this.props.textAlign === 'center' ? ImageFontLayoutCenterSelected : ImageFontLayoutCenter}
					disabledIcon={ImageFontLayoutCenterDisabled}
					onSelected={this.onFontLayoutChange('center')}
				></SelectButton>

				<SelectButton
					disabled={this.props.disabled}
					selected={this.props.textAlign === 'right'}
					icon={this.props.textAlign === 'right' ? ImageFontLayoutRightSelected : ImageFontLayoutRight}
					disabledIcon={ImageFontLayoutRightDisabled}
					onSelected={this.onFontLayoutChange('right')}
				></SelectButton>

				{/* <SelectButton
					selected={this.props.textAlign === 'justify'}
					icon={this.props.textAlign === 'justify' ? ImageFontLayoutJustifySelected : ImageFontLayoutJustify}
					disabledIcon={ImageFontLayoutJustifyDisabled}
					onSelected={this.onFontLayoutChange('justify')}
				></SelectButton> */}
			</div>
		);
	}
}

FontLayoutButtonGroup.defaultProps = {
	disabled: false,
	textAlign: 'start',
	'className': ''
};

FontLayoutButtonGroup.propTypes = {
	disabled: PropTypes.bool,
	textAlign: PropTypes.string,
	onFontLayoutChange: PropTypes.func.isRequired
}

export default FontLayoutButtonGroup;