<h3>Featured</h3>
<div id="featured" class="carousel slide">
	<!-- <ol class="carousel-indicators"> -->
	<!--	 <li data-target="#featured" data-slide-to="0" class="active"></li> -->
	<!--	 <li data-target="#featured" data-slide-to="1"></li> -->
	<!--	 <li data-target="#featured" data-slide-to="2"></li> -->
	<!-- </ol> -->
	<!-- Carousel items -->
	<div class="carousel-inner">
		<div class="active item">
			<img class="img-featured" src="app/img/memes/{{ id }}.png" alt="Main Featured." />
			<div class="carousel-caption">
				<h3>{{ name }}</h3>
				<p>{{ description }}</p>
				<p>{{ price }}</p>
			</div>
		</div>
		<div id="featuredCarousel"></div>
	</div>
	<!-- Carousel nav -->
	<a class="carousel-control left" href="#featured" data-slide="prev">&lsaquo;</a>
	<a class="carousel-control right" href="#featured" data-slide="next">&rsaquo;</a>
</div>
