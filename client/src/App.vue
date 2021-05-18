<template>
  <div id="nav">
    <Menubar :model="headerItems" />
    <img alt="Advisr logo" height="200" src="./assets/advisrlogo-nobg.png" />
    <router-view />
    <Menubar :model="footerItems" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerItems: [{ label: "Home", icon: "pi pi-fw pi-home", to: "/" }],
      footerItems: [
        {
          label: "Created by Amish Prajapati",
          icon: "pi pi-fw pi-user",
          url: "https://github.com/amishpr/",
        },
        {
          label: "GitHub Repo",
          icon: "pi pi-fw pi-github",
          url: "https://github.com/amishpr/advisr-project",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#graytext {
  color: #777777;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
