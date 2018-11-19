<template>
<div>
    <div name="editor" id="editor">
        <textarea rows="1" >
        </textarea>
    </div>
    <div name="tags" id="tags">

    </div>
</div>

</template>
<script>
export default {
    props:["tagsProps"],
    data(){
        return{
            tagList:[]
        }
    }
}
</script>
<style scoped>

</style>


