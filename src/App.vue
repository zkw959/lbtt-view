<template>
  <div id="app">
    <el-row>
      <el-col :xl="6" :md="10" :xs="24">
        <Search />
        <Lbtt />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Search from "./components/Search";
import Lbtt from "./components/Lbtt";

export default {
  components: {
    Search,
    Lbtt,
  },
};
</script>
<style >
#title {
  text-align: center;
}
body {
  background-color: #909399;
}
</style>

