<template>
  <div>
    <el-date-picker
      style="width: 60%;"
      v-model="value"
      type="date"
      placeholder="选择日期"
      editable
      value-format="yyyy/MM/dd"
      :picker-options="pickerOptions"
    >
    </el-date-picker>
    <el-button style="width: 40%;" type="info" :plain="true" @click="sendAjax"
      >获取连板信息</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          const D = new Date(time);
          return (
            D.getTime() > new Date() || D.getDay() === 6 || D.getDay() === 0
          );
        },
      },
      value: JSON.parse(localStorage.getItem("value")) || "",
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    sendAjax() {
      // 判断是否为空
      if (this.value === "" || !this.value) {
        this.$message({
          showClose: true,
          message: "输入不能为空",
          type: "error",
        });
        return;
      }

      // 本地存储日期value
      localStorage.setItem("value", JSON.stringify(this.value));
      // 派发改变加载
      this.$store.commit("Lbtt/CHANGELOADING", true);
      // 派发获取股票数据
      this.$store.dispatch("Lbtt/getLbttInfo", this.date);
      

      
    },
  },
  computed: {
    date() {
      return this.value ? this.value.split("/").join("") : "";
    },

    msgInfo() {
      return this.$store.state.Lbtt.msgInfo;
    },
  },
  watch: {
    msgInfo(){
      if (this.msgInfo.code === -2 || this.msgInfo.code === -1) {
        this.$message({
          showClose: true,
          message: this.msgInfo.msg,
          type: this.msgInfo.type,
        });
      } else {
        this.$message({
          showClose: true,
          message: this.msgInfo.msg,
          type: this.msgInfo.type,
        });
      }
    }
  },
};
</script>

<style>
</style>