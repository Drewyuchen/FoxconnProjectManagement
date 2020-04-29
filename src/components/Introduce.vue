<template>
    <div class="intro">
        <div class="intro-inner">
            <h1>{{msg}}</h1>
            <p>這是一個項目日誌管理系統，您可以在此查看團隊成員的工作進度和工作時程。同時您可以針對團隊成員的工作日誌进行评价和相關圖表輸出</p>
        </div>
        <router-link class="button" :to="\home">OK,Let's Start!</router-link>
    </div>
<\template>
<script>
    export default{
        name:"Introduce",
        data(){
            return {
                msg:"您好，主管"
            }
        }
    }
</script>