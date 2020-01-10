import './font-style-button-group.less';

import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectButton from '../select-button';
import ImageFontWeight from '@assets/images/粗体@2x.png';
import ImageFontWeightDisabled from '@assets/images/粗体_不可点@2x.png';
import ImageFontFontStyle from '@assets/images/斜体@2x.png';
import ImageFontFontStyleDisabled from '@assets/images/斜体_不可点@2x.png';
import ImageFontTextDecoration from '@assets/images/下划线@2x.png';
import ImageFontTextDecorationDisabled from '@assets/images/下划线_不可点@2x.png';

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
		const disabled = this.props.disabled;
		const className = classNames(
			'coursebox-font-style-button-group',
			this.props.className,
			{
				disabled
			});

		return (
			<div className={className}>
				<SelectButton
					disabled={disabled}
					selected={this.props.fontWeight === 'bold'}
					icon={ImageFontWeight}
					disabledIcon={ImageFontWeightDisabled}
					onSelected={this.onFontStyleChange('fontWeight')}
				></SelectButton>
				<SelectButton
					disabled={disabled}
					selected={this.props.fontStyle === 'italic'}
					icon={ImageFontFontStyle}
					disabledIcon={ImageFontFontStyleDisabled}
					onSelected={this.onFontStyleChange('fontStyle')}
				></SelectButton>
				<SelectButton
					disabled={disabled}
					selected={this.props.textDecoration === 'underline'}
					icon={ImageFontTextDecoration}
					disabledIcon={ImageFontTextDecorationDisabled}
					onSelected={this.onFontStyleChange('textDecoration')}
				></SelectButton>
			</div>
		);
	}
}

FontStyleButtonGroup.defaultProps = {
	disabled: false,
	fontWeight: 'normal',
	fontStyle: 'normal',
	textDecoration: 'none',
	className: ''
};

FontStyleButtonGroup.propTypes = {
	disabled: PropTypes.bool,
	fontWeight: PropTypes.string,
	fontStyle: PropTypes.string,
	className: PropTypes.string,
	textDecoration: PropTypes.string,
	onFontStyleChange: PropTypes.func.isRequired
}

export default FontStyleButtonGroup;