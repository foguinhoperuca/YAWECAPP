<h3>{{title}}</h3>
<div id="featured" class="carousel slide">
  <!-- <ol class="carousel-indicators"> -->
  <!--   <li data-target="#featured" data-slide-to="0" class="active"></li> -->
  <!--   <li data-target="#featured" data-slide-to="1"></li> -->
  <!--   <li data-target="#featured" data-slide-to="2"></li> -->
  <!-- </ol> -->
  <!-- Carousel items -->
  <div class="carousel-inner">

    <div class="active item">
      <!-- <img src="img/featured/{{ productFeatured.id }}.jpg" alt="" width="750px" height="500px" /> -->
      <img src="img/catalogs/featured/{{ productFeatured.id }}.jpg" alt="" />
      <div class="carousel-caption">
	<h3>{{ productFeatured.name }}</h3>
	<p>{{ productFeatured.description }}</p>
	<p>{{ productFeatured.price }}</p>
      </div>
    </div>
    {{products}}
    <div class="item">
      <!-- <img src="img/featured/{{ id }}.jpg" alt="" width="750px" height="500px" /> -->
      <img src="img/catalogs/{{ category }}/{{ id }}.jpg" alt="" />
      <div class="carousel-caption">
	<h3>{{ name }}</h3>
	<p>{{ description }}</p>
	<p>{{ price }}</p>
      </div>
    </div>
    {{/products}}
  </div>
  <!-- Carousel nav -->
  <a class="carousel-control left" href="#featured" data-slide="prev">&lsaquo;</a>
  <a class="carousel-control right" href="#featured" data-slide="next">&rsaquo;</a>
</div>


