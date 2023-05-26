<template>
    <div>
        <h1>Login</h1>
        <!--<p>{{ textMayusculas }}</p>
        <p>{{ userStore.minusculas }}</p>-->
        <form @submit.prevent="handlerSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Acceso</button>
        </form>
    </div>
</template>

<script setup>
/*import { computed } from 'vue'
import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()
const textMayusculas = computed(() => userStore.userData.toUpperCase())*/

import {ref} from 'vue';
import {useUserStore} from '../stores/user';
//import {useRouter} from 'vue-router';


const userStore = useUserStore();
//const router = useRouter();

const email = ref('');
const password = ref('');


    const handlerSubmit = async() => {
        if(!email.value || password.value.length < 6){
            return alert('llenar los campos')
        }
        await userStore.loginUser(email.value, password.value);
        //router.push('/');

    }

</script>