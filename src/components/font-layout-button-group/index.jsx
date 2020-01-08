import './font-layout-button-group.less';

import { Component } from 'react';
import PropTypes from 'prop-types';
import SelectButton from '../select-button';
import ImageFontLayoutLeft from '@assets/images/左对齐_正常@2x.png';
import ImageFontLayoutCenter from '@assets/images/居中对齐_正常@2x.png';
import ImageFontLayoutRight from '@assets/images/右对齐_正常@2x.png';
import ImageFontLayoutJustify from '@assets/images/两侧对齐_正常@2x.png';

import ImageFontLayoutLeftSelected from '@assets/images/左对齐_选中@2x.png';
import ImageFontLayoutCenterSelected from '@assets/images/居中对齐_选中@2x.png';
import ImageFontLayoutRightSelected from '@assets/images/右对齐_选中@2x.png';
import ImageFontLayoutJustifySelected from '@assets/images/两侧对齐_选中@2x.png';

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
		const className = this.props.className;

		return (
			<div className={`coursebox-font-layout-button-group ${className}`}>
				<SelectButton
					selected={this.props.textAlign === 'left' || this.props.textAlign === 'start'}
					icon={this.props.textAlign === 'left' ? ImageFontLayoutLeftSelected : ImageFontLayoutLeft}
					onSelected={this.onFontLayoutChange('left')}
				></SelectButton>

				<SelectButton
					selected={this.props.textAlign === 'center'}
					icon={this.props.textAlign === 'center' ? ImageFontLayoutCenterSelected : ImageFontLayoutCenter}
					onSelected={this.onFontLayoutChange('center')}
				></SelectButton>

				<SelectButton
					selected={this.props.textAlign === 'right'}
					icon={this.props.textAlign === 'right' ? ImageFontLayoutRightSelected : ImageFontLayoutRight}
					onSelected={this.onFontLayoutChange('right')}
				></SelectButton>

				{/* <SelectButton
					selected={this.props.textAlign === 'justify'}
					icon={this.props.textAlign === 'justify' ? ImageFontLayoutJustifySelected : ImageFontLayoutJustify}
					onSelected={this.onFontLayoutChange('justify')}
				></SelectButton> */}
			</div>
		);
	}
}

PropTypes.defaultProps = {
	textAlign: 'start',
	'className': ''
};

PropTypes.propTypes = {
	textAlign: PropTypes.string,
	onFontLayoutChange: PropTypes.func.isRequired
}

export default FontLayoutButtonGroup;