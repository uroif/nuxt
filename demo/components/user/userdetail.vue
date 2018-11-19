<template>
    <el-main>
        <el-form ref="user" label-position="left" :model="user" label-width="100px">
            <el-form-item label="User ID">
                <el-input v-model="user.id" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="Name">
                <el-input v-model="user.name"></el-input>
            </el-form-item>
            <el-form-item label="Username">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="user.email"></el-input>
            </el-form-item>
            <div class="flexbox">
                <div class="label">Address</div>
                <div>
                    <el-form-item label="Suite">
                        <el-input v-model="user.address.suite" class="address"></el-input>
                    </el-form-item>
                    <el-form-item label="Street">
                        <el-input v-model="user.address.street" class="address"></el-input>
                    </el-form-item>
                    <el-form-item label="City">
                        <el-input v-model="user.address.city" class="address"></el-input>
                    </el-form-item>
                    <el-form-item label="Zipcode">
                        <el-input v-model="user.address.zipcode" class="address"></el-input>
                    </el-form-item>
                    <div class="flexbox">
                        <div class="label">Geo</div>
                        <div>
                            <el-form-item label="Latitude">
                                <el-input v-model="user.address.geo.lat" class="geo"></el-input>
                            </el-form-item>
                            <el-form-item label="Longtitude">
                                <el-input v-model="user.address.geo.lng" class="geo"></el-input>
                            </el-form-item>                            
                        </div>
                    </div>
                </div>
            </div>
            <el-form-item label="Phone">
                <el-input v-model="user.phone"></el-input>
            </el-form-item>
            <el-form-item label="Website">
                <el-input v-model="user.website"></el-input>
                <el-button @click="onClickWebsiteLink">Open</el-button>
            </el-form-item>
            <div class="flexbox">
                <div class="label">Company</div>
                <div>
                    <el-form-item label="Name">
                        <el-input v-model="user.company.name" class="company"></el-input>
                    </el-form-item>
                    <el-form-item label="Catch Phrase">
                        <el-input v-model="user.company.catchPhrase" class="company"></el-input>
                    </el-form-item>
                    <el-form-item label="BS">
                        <el-input v-model="user.company.bs" class="company"></el-input>
                    </el-form-item>
                </div>
            </div>
            <el-form-item>
                <el-row class="button">
                    <el-col :span="8">
                        <el-button type="primary" @click="onClickUpdate()">Update</el-button>
                    </el-col>
                    <el-col :span="8">
                        <el-button @click="onClickReset()">Reset</el-button>
                    </el-col>
                    <!-- <el-col :span="8">
                        <el-button type="danger" @click="onClickDelete()">Delete</el-button>
                    </el-col> -->
                </el-row>
            </el-form-item>
        </el-form>
    </el-main>
</template>
<script>
import UserApi from "@/apis/user";
export default {
    data(){
        return {
            user: JSON.parse(JSON.stringify(this.$store.state.usermodule.user))
        }
    },
    methods:{
        onClickWebsiteLink(){
            window.open(`http://${this.user.website}`, '_blank');
        },
        async onClickUpdate(){
            let response
            response = await UserApi.updateUser(this.user)
            this.$store.dispatch('usermodule/updateUser', response.data)
            this.$router.push({ path: `/users` })
        },
        onClickReset(){
            this.user =  JSON.parse(JSON.stringify(this.$store.state.usermodule.user))
        },
        async onClickDelete(){
            // let response
            // response = await UserApi.deleteUser(this.user)
            // this.$store.dispatch('usermodule/deleteUser', response.data)
            // this.$router.push({ path: `/users` })
        }
    }
}
</script>
<style scoped>
label{
    margin: 0;
}
.el-input{
    width: 550px;
}
.el-button{
    width: 100px;
}
.el-collapse {
    width: 650px;
    margin-bottom: 23px;
}
.el-collapse-item__content {
    padding-bottom: 0; 
}
.flexbox{
    display: flex;
    align-items: flex-start;
}
.label{
    width: 100px;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}
.address, .company{
    width: 450px;
}
.geo{
    width: 350px;
}
.button{
    width: 550px;
}
</style>

