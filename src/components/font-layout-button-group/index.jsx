import './font-layout-button-group.less';

import { Component } from 'react';
import ButtonIcon from '../button-icon';
import ImageFontLayoutLeft from '@assets/images/左对齐_正常@2x.png';
import ImageFontLayoutCenter from '@assets/images/居中对齐_正常@2x.png';
import ImageFontLayoutRight from '@assets/images/右对齐_正常@2x.png';
import ImageFontLayoutJustify from '@assets/images/两侧对齐_正常@2x.png';

const debug = require('@commons/debug')('textbox:font-layout-button-group');


class FontLayoutButtonGroup extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="coursebox-font-layout-button-group">
				<ButtonIcon selected={this.props.textAlign === 'left'} icon={ImageFontLayoutLeft}></ButtonIcon>
				<ButtonIcon selected={this.props.textAlign === 'center'} icon={ImageFontLayoutCenter}></ButtonIcon>
				<ButtonIcon selected={this.props.textAlign === 'right'} icon={ImageFontLayoutRight}></ButtonIcon>
				<ButtonIcon selected={this.props.textAlign === 'justify'} icon={ImageFontLayoutJustify}></ButtonIcon>
			</div>
		);
	}
}

export default FontLayoutButtonGroup;