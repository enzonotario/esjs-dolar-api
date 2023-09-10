import viteDevServer from 'vavite/vite-dev-server';

export default async function (req, res) {
  const gTag = import.meta.env.VITE_GTAG;

  let html = `<!doctype html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,initial-scale=1">
		<title>DolarApi.com - API para obtener el precio del Dólar en Argentina</title>
		<meta name="description" content="API para Dólar Oficial, Dólar Blue, Dólar Bolsa, Dólar CCL, Dólar Solidario, Dólar Mayorista">

		<link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet">
		<script type="module" src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"></script>
		<script async src="https://www.googletagmanager.com/gtag/js?id=${gTag}"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', '${gTag}');
		</script>
	</head>
	<body>
		<rapi-doc
			spec-url="./swagger.json"
			allow-authentication="false"
			allow-server-selection="false"
			allow-spec-url-load="false"
			allow-spec-file-load="false"
			allow-search="false"
			allow-advanced-search="false"
			render-style="read"
			theme="dark"
			bg-color="#020617"
			text-color="#f1f5f9"
			primary-color="#a78bfa"
			font-size="largest"
			regular-font="Inter"
			mono-font="Inter"
		>
			<div slot="logo" style="display:flex; align-items:center; gap:8px; margin:0 16px;">
				<img src="https://esjs.dev/assets/logo.png" style="width:42px; height:42px" alt="EsJS Logo">
			</div>

			<div slot='header' style='width:100%;display:flex; margin:0 16px; align-items:center; gap:8px; justify-content:space-between;'>
				<h1 style='flex:1;'>DolarApi.com</h1>

				<iframe src="https://ghbtns.com/github-btn.html?user=enzonotario&repo=esjs-dolar-api&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px" title="GitHub"></iframe>
			</div>
		</rapi-doc>
	</body>
</html>`;

  if (viteDevServer) {
    html = await viteDevServer.transformIndexHtml(req.url, html);
  }

  res.send(html);
}
