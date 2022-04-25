<script>
export default {
    props:['showModal'],
}
</script>

<template>
    <div v-show="showModal" class="fixed flex justify-center items-center w-screen h-screen bg-shadowModal opacity-75 top-0 z-10">
        <div class="bg-white">
            <h1 class=" text-black ">Hello world!</h1>
        </div>
    </div>
</template>