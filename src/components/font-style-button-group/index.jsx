import './font-style-button-group.less';

import { Component } from 'react';

import ButtonIcon from '../button-icon';
import ImageFontWeight from '@assets/images/粗体@2x.png';
import ImageFontFontStyle from '@assets/images/斜体@2x.png';
import ImageFontTextDecoration from '@assets/images/下划线@2x.png';

const debug = require('@commons/debug')('textbox:font-style-button-group');

class FontStyleButtonGroup extends Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(filed) {
		return (val) => {
			debug('selected', filed, val);

			switch (filed) {
				case 'fontWeight':
					this.props.onClick(filed, val ? 'bold' : 'normal')
					break;
				case 'fontStyle':
					this.props.onClick(filed, val ? 'italic' : 'normal');
					break;
				case 'textDecoration':
					this.props.onClick(filed, val ? 'underline' : 'none');
					break;
			}
		}
	}

	render() {
		return (
			<div className="coursebox-font-style-button-group">
				<ButtonIcon selected={this.props.fontWeight === 'bold'} icon={ImageFontWeight} onClick={this.onClick('fontWeight')}></ButtonIcon>
				<ButtonIcon selected={this.props.fontStyle === 'italic'} icon={ImageFontFontStyle} onClick={this.onClick('fontStyle')}></ButtonIcon>
				<ButtonIcon selected={this.props.textDecoration === 'underline'} icon={ImageFontTextDecoration} onClick={this.onClick('textDecoration')}></ButtonIcon>
			</div>
		);
	}
}



export default FontStyleButtonGroup;