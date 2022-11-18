<template>
  <div>
    <h3 id="title">连板天梯-{{ lbtt_data.length }}</h3>
    <el-table 
    v-loading="loading" 
    :data="lbtt_data" 
    border stripe>
    
      <el-table-column 
      prop="stk-code" 
      label="股票代码" 
      align="center">
      </el-table-column>

      <el-table-column 
      prop="stk-name" 
      label="股票名称" 
      align="center">
      </el-table-column>

      <el-table-column
        prop="trading-day"
        label="连板天数"
        align="center"
        sortable
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
    };
  },
  computed:{
    ...mapState('Lbtt',['lbtt_data','loading'])
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>