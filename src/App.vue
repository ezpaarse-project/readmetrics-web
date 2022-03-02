<template>
  <div>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue lighten-1">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <Lang />
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="section no-pad-bot blue lighten-1" id="index-banner">
      <br />
      <br />
      <h1 class="white-text center">Logo</h1>
      <h1 class="white-text center">Readmetrics</h1>
      <br />
      <br />
    </div>

    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br />
        <br />
        <br />
        <br />

        <div class="row center">
          <h3 class="header col s12 light">{{ $t("subtitle") }}</h3>
          <div>
            <img
              class="responsive-img"
              v-bind:src="require('@/images/logo-ezpaarse.svg')"
              width="200"
              height="200"
              style="margin-right: 20px"
            />
            <img
              class="responsive-img"
              v-bind:src="require('@/images/logo-ezmesure.svg')"
              width="250"
              height="250"
            />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </div>

    <div class="white-text">
      <div class="section blue lighten-1">
        <div class="container row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <a
                  class="btn-floating btn-large waves-effect waves-light orange"
                  ><i class="medium material-icons">forward</i></a
                >
              </h2>
              <h4 class="center">{{ $t("demoButton") }}</h4>

              <blockquote style="border-color:white">
                {{ $t("demoText1") }}
              </blockquote>
              <blockquote style="border-color:white">
                {{ $t("demoText2") }}
              </blockquote>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <a
                  class="btn-floating btn-large waves-effect waves-light orange"
                >
                  <i class="medium material-icons">add</i>
                </a>
              </h2>
              <h4 class="center">{{ $t("signUpButton") }}</h4>

              <blockquote style="border-color:white">
                {{ $t("signInText") }}
              </blockquote>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <a
                  class="btn-floating btn-large waves-effect waves-light orange"
                >
                  <i class="medium material-icons">vpn_key</i>
                </a>
              </h2>
              <h4 class="center">{{ $t("signInButton") }}</h4>

              <blockquote class="flow-text" style="border-color:white">
                {{ $t("signUpText") }}
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div class="section blue lighten-1">
        <div class="row container">
          <div class="col s12 m6">
            <div class="icon-block">
              <h2 class="center">
                <i class="medium material-icons">live_help</i>
              </h2>
              <h5 class="center">{{ $t("what") }}</h5>

              <blockquote class="flow-text" style="border-color:white">
                {{ $t("whatText") }}
              </blockquote>
            </div>
          </div>

          <div class="col s12 m6">
            <div class="icon-block">
              <h2 class="center">
                <i class="medium material-icons">face</i>
              </h2>
              <h5 class="center">{{ $t("who") }}</h5>

              <blockquote class="flow-text" style="border-color:white">
                {{ $t("whoText") }}
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>

    <footer class="page-footer blue lighten-1">
      <div class="row">
        <div class="col l4 s12">
          <h5>Contact</h5>
          <p>ezteam@couperin.org</p>
        </div>

        <div class="col l2 offset-l4 s12">
          <div class="valign-wrapper">
            <h5 class="white-text">Social network</h5>
          </div>
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="https://blog.ezpaarse.org/">Blog ezPAARSE</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="https://twitter.com/ezpaarse">Twitter</a>
            </li>
          </ul>
        </div>

        <div class="col l2 s12">
          <div class="valign-wrapper">
            <img
              :src="require('@/images/github.svg')"
              style="width: 24px; height: 24px; margin-right: 10px"
            />
            <h5 class="white-text">Code source</h5>
          </div>
          <ul>
            <li>
              <a class="grey-text text-lighten-3" href="https://github.com/ezpaarse-project/">ezpaarse-project</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="#!">readmetrics</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="https://github.com/ezpaarse-project/ezpaarse">ezpaarse</a>
            </li>
            <li>
              <a class="grey-text text-lighten-3" href="https://github.com/ezpaarse-project/ezmesure">ezmesure</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-copyright">
        <div>© 2022 Copyright Text</div>
      </div>
    </footer>
  </div>
</template>

<script>
import M from "materialize-css";
import Lang from "@/components/Lang.vue";

export default {
  name: "App",
  mounted() {
    M.AutoInit();
  },
  components: {
    Lang,
  },
};
</script>

<style>
blockquote {
  border-left: 5px solid #64b5f6; /* Just change the color value and that's it*/
}

</style>