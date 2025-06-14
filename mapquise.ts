<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/vanilla-picker@2.12.3/dist/vanilla-picker.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vanilla-picker@2.12.3/dist/vanilla-picker.csp.min.css">
    <script type="text/javascript">
        let map = new Map({
        container: 'map',
        center: [-122.420679, 37.772537],
        zoom: 13,
        style: style_object,
        hash: true,
        transformRequest: (url, resourceType)=> {
            if(resourceType === 'Source' && url.startsWith('http://myHost')) {
            return {
            url: url.replace('http', 'https'),
            headers: { 'my-custom-header': true},
            credentials: 'include'  // Include cookies for cross-origin requests
            }
            }
        }
        });
        let marker = new Marker({
            color: "#FFFFFF",
            draggable: true
        }).setLngLat([30.5, 50.5])
        .addTo(map);
        </script>
  </head>
  <body>
  </body>
</html>