<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a class="btn waves-effect waves-light red"> <i class="material-icons right">send</i>Loggin </a></li>
        </ul>
      </div>
    </nav>
    <div class="section no-pad-bot" id="index-banner">
      <div class="container">
        <br /><br />
        <h1 class="header center orange-text">ReadMetrics</h1>
        <div class="row center">
          <h5 class="header col s12 light">
            A package with ezPAARSE and ezMESURE
          </h5>
        </div>
        <br /><br />
      </div>
    </div>

    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <i class="medium material-icons icon-red">live_help</i>
              </h2>
              <h5 class="center">{{ $t("what") }}</h5>

              <p class="light">
                {{ $t("whatText") }}
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <a class="btn-floating btn-large waves-effect waves-light red"
                  ><i class="medium material-icons">forward</i></a
                >
              </h2>
              <h5 class="center">{{ $t("demoButton") }}</h5>

              <p class="light">
                {{ $t("demoText1") }}
              </p>
              <p class="light">
                {{ $t("demoText2") }}
              </p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center">
                <a class="btn-floating btn-large waves-effect waves-light red"
                  ><i class="medium material-icons">add</i></a
                >
              </h2>
              <h5 class="center">{{ $t("signInButton") }}</h5>

              <p class="light">
                {{ $t("signInText") }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 m6">
              <div class="icon-block">
                <h2 class="center">
                  <i class="medium material-icons icon-red">face</i>
                </h2>
                <h5 class="center">{{ $t("who") }}</h5>

                <p class="light">
                  {{ $t("whoText") }}
                </p>
              </div>
            </div>

            <div class="col s12 m6">
              <div class="icon-block">
                <h2 class="center">
                  <i class="medium material-icons icon-red">mail</i>
                </h2>
                <h5 class="center">Contact us</h5>

                <p class="light">
                  {{ $t("whoText") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </div>

    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">ezteam@couperin.org</h5>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">ezpaarse</a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">ezmesure</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="container">© 2022 Copyright Text</div>
      </div>
    </footer>
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "App",
  mounted() {
    M.AutoInit();
  },
};
</script>

<style>
i.icon-red {
  color: red;
}
</style>
