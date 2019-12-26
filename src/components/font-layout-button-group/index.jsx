import './font-layout-button-group.less';

import { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../button-icon';
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
		return (
			<div className="coursebox-font-layout-button-group">
				<ButtonIcon
					selected={this.props.textAlign === 'left'}
					icon={this.props.textAlign === 'left' ? ImageFontLayoutLeftSelected : ImageFontLayoutLeft}
					onSelected={this.onFontLayoutChange('left')}
				></ButtonIcon>

				<ButtonIcon
					selected={this.props.textAlign === 'center'}
					icon={this.props.textAlign === 'center' ? ImageFontLayoutCenterSelected : ImageFontLayoutCenter}
					onSelected={this.onFontLayoutChange('center')}
				></ButtonIcon>

				<ButtonIcon
					selected={this.props.textAlign === 'right'}
					icon={this.props.textAlign === 'right' ? ImageFontLayoutRightSelected : ImageFontLayoutRight}
					onSelected={this.onFontLayoutChange('right')}
				></ButtonIcon>

				<ButtonIcon
					selected={this.props.textAlign === 'justify'}
					icon={this.props.textAlign === 'justify' ? ImageFontLayoutJustifySelected : ImageFontLayoutJustify}
					onSelected={this.onFontLayoutChange('justify')}
				></ButtonIcon>
			</div>
		);
	}
}

PropTypes.defaultProps = {
	textAlign: 'start'
};

PropTypes.propTypes = {
	textAlign: PropTypes.string,
	onFontLayoutChange: PropTypes.func.isRequired
}

export default FontLayoutButtonGroup;