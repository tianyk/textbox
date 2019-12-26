import './font-style-button-group.less';

import { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../button-icon';
import ImageFontWeight from '@assets/images/粗体@2x.png';
import ImageFontFontStyle from '@assets/images/斜体@2x.png';
import ImageFontTextDecoration from '@assets/images/下划线@2x.png';

const debug = require('@commons/debug')('textbox:font-style-button-group');

class FontStyleButtonGroup extends Component {
	constructor(props) {
		super(props);

		this.onFontStyleChange = this.onFontStyleChange.bind(this);
	}

	onFontStyleChange(filed) {
		return (val) => {
			debug('onFontStyleChange', filed, val);

			switch (filed) {
				case 'fontWeight':
					this.props.onFontStyleChange(filed, val ? 'bold' : 'normal')
					break;
				case 'fontStyle':
					this.props.onFontStyleChange(filed, val ? 'italic' : 'normal');
					break;
				case 'textDecoration':
					this.props.onFontStyleChange(filed, val ? 'underline' : 'none');
					break;
			}
		}
	}

	render() {
		return (
			<div className="coursebox-font-style-button-group">
				<ButtonIcon
					selected={this.props.fontWeight === 'bold'}
					icon={ImageFontWeight}
					onSelected={this.onFontStyleChange('fontWeight')}
				></ButtonIcon>
				<ButtonIcon
					selected={this.props.fontStyle === 'italic'}
					icon={ImageFontFontStyle}
					onSelected={this.onFontStyleChange('fontStyle')}
				></ButtonIcon>
				<ButtonIcon
					selected={this.props.textDecoration === 'underline'}
					icon={ImageFontTextDecoration}
					onSelected={this.onFontStyleChange('textDecoration')}
				></ButtonIcon>
			</div>
		);
	}
}

FontStyleButtonGroup.defaultProps = {
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none'
};

FontStyleButtonGroup.propTypes = {
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	textDecoration: PropTypes.string,
	onFontStyleChange: PropTypes.func.isRequired
}

export default FontStyleButtonGroup;