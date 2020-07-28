import {Page404} from './style404';
import React from 'react';

function Erro404() {
	return (
		<Page404>
			<div id="notfound">
				<div className="notfound-bg">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="notfound">
					<div className="notfound-404">
						<h1>404</h1>
					</div>
					<h2>Vish deu ruim</h2>
					<p>A página que você está procurando pode ter sido removida com o nome alterado ou está temporariamente indisponível.</p>
					<a href="/">Homepage</a>
					<div className="notfound-social">
						<a href="https://twitter.com/hugulima_" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733579.svg" width="30px" alt="twitter icon"></img></a>
						<a href="https://www.twitch.tv/hugolima_dev" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/2111/2111668.svg" width="30px" alt="twitch icon"></img></a>
						<a href="https://www.instagram.com/hugulima_/" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733558.svg" width="30px" alt="instagram icon"></img></a>
						<a href="https://github.com/hugolima03" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733553.svg" width="30px" alt="github icon"></img></a>
					</div>
				</div>
			</div>
		</Page404>
	);
}

export default Erro404;