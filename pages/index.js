import React from 'react';

import {getHeader} from '../utils';

export default class extends React.Component {

	render() {
		return (
			<div>
				{getHeader()}
				<h2> Bulma Spike </h2>
			</div>
		);
	}
}
