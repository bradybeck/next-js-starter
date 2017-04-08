import React from 'react';

import {getHeader} from '../utils';

export default class extends React.Component {

	render() {
		return (
			<div>
				{getHeader()}
				<section className="hero is-default is-fullheight">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">
								Next JS Starter
							</h1>
							<h2 className="subtitle">
								Take er easy.
							</h2>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
