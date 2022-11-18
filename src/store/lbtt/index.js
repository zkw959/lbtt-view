// 引入请求接口的方法
import { reqLbtts } from '@/api'
export default {
    namespaced: true,
    actions: {
        async getLbttInfo(context, date) {
            try {
                const lbtt = await reqLbtts(date);
                // const overall = await reqOverallDatas(this.date);


                if (lbtt.data.code === -1) {
                    context.commit('GETMSGINFO', { code: lbtt.data.code, msg: "这天不是交易日", type: "error" })
                } else {
                    context.commit('GETMSGINFO', { code: lbtt.data.code, msg: "恭喜你！成功获取股票信息", type: "success" })
                    context.commit('GETLBTTDATA', lbtt.data.data)
                }

            } catch (error) {
                context.commit('GETMSGINFO', { code: -2, msg: error.message, type: "error" })
            } finally {
                context.commit("CHANGELOADING", false)
            }

        }
    },
    mutations: {
        GETLBTTDATA(state, lbttData) {
            state.lbtt_data = lbttData
        },
        CHANGELOADING(state, isLoading) {
            state.loading = isLoading
        },
        GETMSGINFO(state, msgInfo) {
            state.msgInfo = msgInfo
        }
    },
    getters: {

    },
    state: {
        lbtt_data: [],
        loading: false,
        msgInfo: {}

    }
}