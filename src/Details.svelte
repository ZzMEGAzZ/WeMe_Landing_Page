<main>
    <div class="row">
    <section class="card">
        <div class="card-thumb">
          <a href={"#"}><img src="https://images.unsplash.com/photo-1652159689167-1f1bf55a6abe?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM2NjgzNTc&ixlib=rb-1.2.1&q=80" alt="" /></a>
          <span class="card-category">Web Developer</span>
        </div>
        <div class="card-date">
          <span>January</span>
          <span>16</span>
        </div>
        <div class="card-body">
          <h2 class="card-title">animations in css 3</h2>
          <h4 class="card-subtitle">Part 1: property introduces</h4>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla atque
            consectetur, adipisicing elit.
          </p>
        </div>
        <div class="card-footer">
          <div class="card-time">
            <i class="material-icons">alarm</i><span>30 mins</span>
          </div>
          <div class="card-comment">
            <i class="material-icons">comment</i><span>6</span>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card-thumb">
          <a href={"#"}><img src="https://images.unsplash.com/photo-1652159689167-1f1bf55a6abe?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTM2NjgzNTc&ixlib=rb-1.2.1&q=80" alt="" /></a>
          <span class="card-category">Web Developer</span>
        </div>
        <div class="card-date">
          <span>January</span>
          <span>16</span>
        </div>
        <div class="card-body">
          <h2 class="card-title">animations in css 3</h2>
          <h4 class="card-subtitle">Part 1: property introduces</h4>
          <p class="card-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla atque
            consectetur, adipisicing elit.
          </p>
        </div>
        <div class="card-footer">
          <div class="card-time">
            <i class="material-icons">alarm</i><span>30 mins</span>
          </div>
          <div class="card-comment">
            <i class="material-icons">comment</i><span>6</span>
          </div>
        </div>
      </section>
    </div>
</main>
  <style>
main {
  position: relative;
  background-color: #d8e0e5;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
a {
  text-decoration: none;
  color: inherit;
}
.card {
  position: relative;
  max-width: calc(100vw - 10em);
  margin: 20px auto;
  min-width: 20px;
  background-color: #fff;
  border-radius: 2rem;
  overflow: hidden;
}
.card-body,
.card-footer {
  padding: 1.5em;
  padding-bottom: 0;
}
img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.4s ease;
}
.card:hover img {
  transform: scale(1.2);
}
.card-thumb {
  position: relative;
  height: 200px;
  transition: height 0.4s ease;
}
.card-thumb a {
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.card:hover .card-thumb {
  height: calc(200px - 4.5rem);
}
.card-thumb::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.4s ease;
}
.card:hover .card-thumb::after {
  opacity: 0.4;
}
.card-date {
  display: flex;
  position: absolute;
  top: -3rem;
  right: 0;
  width: fit-content;
  margin: 1rem;
  padding: 0.25rem 0.75rem;
  background-color: #efefef;
  color: #000;
  border-radius: 2rem;
  transition: top 0.4s ease;
}
.card-date :first-child {
  margin-right: 0.25rem;
  font-size: 0.75rem;
}
.card-date :last-child {
  font-size: 0.75rem;
}
.card-category {
  position: absolute;
  bottom: -1rem;
  right: 0;
  margin: 0 1rem;
  padding: 0.25rem 0.75rem;
  background-color: #4193f7;
  color: #fff;
  border-radius: 2rem;
  z-index: 1;
  transition: right 0.4s ease;
}
.card:hover .card-category {
  right: 45%;
}
.card-subtitle {
  margin-bottom: 0.75rem;
  color: rgb(164, 164, 164);
}
.card-description {
  display: block;
  height: 0;
  padding: 0 0.5em;
  font-size: 0.875rem;
  /* color: rgb(96, 91, 91); */
  color: #666c74;
  opacity: 0;
  transition: height 0.4s ease, opacity 0.2s ease;
}
.card:hover .card-description {
  height: 4.5rem;
  opacity: 1;
}
.card-footer {
  display: flex;
  justify-content: flex-end;
  background: #fff;
}
.card-time i,
.card-comment i {
  margin: 0 0.25rem;
  color: #4193f7;
}
.card-time span,
.card-comment span {
  font-size: 0.75rem;
  line-height: 1.875rem;
  vertical-align: top;
}
.card-time {
  margin-right: 0.5rem;
}
.card:hover .card-date {
  top: 0;
}
</style>