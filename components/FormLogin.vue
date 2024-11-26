<script lang="ts" setup>
const login = useNuxtApp().$login;

interface FormState {
    email: string;
    password: string;
}

const formState = reactive<FormState>({
    email: "",
    password: "",
});

const handleLogin = async () => {
    const { data, error } = await useAsyncData("login", () =>
        $fetch("/api/users")
    );

    const user = data.value?.find(
        (u) => u.email === formState.email && u.password === formState.password
    );
    if (user) {
        login(user);

        navigateTo("/");
    } else {
        alert("Account or password is incorrect!");
    }
};
</script>
<template>
    <!-- <client-only> -->
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
    >
        <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your email!' }]"
        >
            <a-input v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
            label="Password"
            name="password"
            :rules="[
                { required: true, message: 'Please input your password!' },
            ]"
        >
            <a-input-password v-model:value="formState.password" />
        </a-form-item>

        <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit" @click="handleLogin"
                >Submit</a-button
            >
        </a-form-item>
    </a-form>
    <!-- </client-only> -->
</template>
