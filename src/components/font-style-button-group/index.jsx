import './font-style-button-group.less';

import { Component } from 'react';
import PropTypes from 'prop-types';
import SelectButton from '../select-button';
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
		const className = this.props.className;
		return (
			<div className={`coursebox-font-style-button-group ${className}`}>
				<SelectButton
					selected={this.props.fontWeight === 'bold'}
					icon={ImageFontWeight}
					onSelected={this.onFontStyleChange('fontWeight')}
				></SelectButton>
				<SelectButton
					selected={this.props.fontStyle === 'italic'}
					icon={ImageFontFontStyle}
					onSelected={this.onFontStyleChange('fontStyle')}
				></SelectButton>
				<SelectButton
					selected={this.props.textDecoration === 'underline'}
					icon={ImageFontTextDecoration}
					onSelected={this.onFontStyleChange('textDecoration')}
				></SelectButton>
			</div>
		);
	}
}

FontStyleButtonGroup.defaultProps = {
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none',
	className: ''
};

FontStyleButtonGroup.propTypes = {
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	className: PropTypes.string,
	textDecoration: PropTypes.string,
	onFontStyleChange: PropTypes.func.isRequired
}

export default FontStyleButtonGroup;