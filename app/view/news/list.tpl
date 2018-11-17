<html>
	<head>
		<title>Hacker News</title>
		<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="/public/css/new.css" />
	</head>
	<body>
		<ul class="news-view view">
			{% for item in list %}
			<li class="item">
				<a href="{{item.url}}">{{ item.title }}</a> <span>{{ helper.relativeTime(item.time) }}</span>
			</li>
			{% endfor %}
		</ul>
	</body>
</html>
