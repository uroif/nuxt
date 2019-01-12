<template>
  <div>
    <aside class="aside">

      <div class="aside-logo">
        <nuxt-link to="/">
          <img src="/logo.png" alt="" class="aside-logo-img">
        </nuxt-link>
      </div>

      <nav class="aside-nav">
        <ul class="">

          <nuxt-link to="/" tag="li" class="aside-nav-link"><a>Homepage</a></nuxt-link>
          <nuxt-link to="/products" tag="li" class="aside-nav-link"><a>Products</a></nuxt-link>
          <nuxt-link to="/about" tag="li" class="aside-nav-link"><a>About</a></nuxt-link>
          <nuxt-link to="/blogs" tag="li" class="aside-nav-link"><a>Blogs</a></nuxt-link>

        </ul>
      </nav>

      <p class="aside-copyright">
        © Copyright 2019
      </p>

    </aside>
  </div>
</template>

<script>
  export default {};
</script>

<style>

  .aside {
    width: 200px;
    height: 100%;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid rgba(100, 100, 100, 0.3);
  }

  .aside-logo {
    width: 100%;
    float: left;
    padding: 50px 40px 50px 0;
    text-align: right;
  }

  .aside-logo-img {
    width: 120px;
    display: inline-block;
  }

  .aside-nav {
    width: 100%;
    float: left;
  }

  .aside-nav li {
    list-style: none;
  }

  .aside-nav li a {
    color: #000;
    text-decoration: none;
  }

  .aside-nav-link {
    width: 100%;
    float: left;
    padding: 20px;
    text-align: right;
    padding-right: 40px;
  }

  .aside-nav-link a {
    color: rgba(0,0,0, 0.6);
    font-size: 15px;
    letter-spacing: 1px;
  }

  .aside-nav-link:hover a,
  .aside-nav-link:active a,
  .aside-nav-link.nuxt-link-exact-active a {
    color: #25ca8f;
    position: relative;
    text-decoration: none;
  }

  .aside-copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 50px;
    font-size: 13px;
    text-align: center;
    color: rgba(0,0,0, 0.6);
  }

</style>
