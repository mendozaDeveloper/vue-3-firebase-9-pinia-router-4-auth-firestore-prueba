<template>
    <div>
        <h1>Register</h1>
        <!--<button @click="userStore.registerUser('Lucho')">Ingresar</button>-->
        <form @submit.prevent="handlerSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email">
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password">
            <button type="submit" :disabled="userStore.loadingUser">Crear usuario</button>
        </form>
    </div>
</template>

<script setup>
/*import { useUserStore } from '../stores/user.js'
const userStore = useUserStore()*/
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
        await userStore.registerUser(email.value, password.value);
        //router.push('/');

    }


</script>