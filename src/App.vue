<template>
 <router-view />
</template>

<script>

export default {
  name: 'App',

}
</script>
<style lang="scss">
 $primary:    #FFA69E;
 $theme-colors: (
         "primary":    #FFA69E,
         "success":    #198754,
         "info":       #0dcaf0,
         "warning":    #ffc107,
         "danger":     #dc3545,
         "light":      #f8f9fa,
         "dark":       #212529,
         "orange":     #FFA69E,
         "cyan":       #AED9E0,
         "blue":       #0d6efd,
         "secondary":  #FAF3DD
 );

 @import '~bootstrap/scss/bootstrap.scss';
 @import "~@fortawesome/fontawesome-free/css/all.css";

 body {
  background-color: #e5e5e5;
  padding: 0 !important;
 }
 .container {
  background-color: transparent !important;
  height: unset;
  min-height: 800px;
 }
 .pt-10 {
  padding-top: 7rem !important;
 }
</style>
