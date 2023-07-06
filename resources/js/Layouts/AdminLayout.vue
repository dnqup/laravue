<template>
    <div class="w-full">
        <HeaderAdmin></HeaderAdmin>
    </div>
    <router-view></router-view>
</template>

<script setup>

import { defineComponent } from 'vue';
import HeaderAdmin from '../Components/Admin/HeaderAdmin.vue';

defineComponent({
    components: {
        HeaderAdmin
    }
})


</script>
