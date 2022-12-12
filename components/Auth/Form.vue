<template>
  <div class="mt-6 w-72">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
      <el-form-item prop="email">
        <el-input
          v-if="props.isRegistering"
          v-model="ruleForm.email"
          type="email"
          autocomplete="off"
          size="large"
          placeholder="Input Your Email"
        /> </el-form-item
      ><el-form-item prop="username">
        <el-input
          v-model="ruleForm.username"
          type="text"
          autocomplete="off"
          size="large"
          placeholder="Input Your Username"
        />
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
          size="large"
          placeholder="Input Your Password"
        />
      </el-form-item>

      <el-form-item>
        <button
          type="button"
          @click="submitForm(ruleFormRef)"
          class="w-full bg-green-350 py-1 px-32 rounded-lg text-white text-center cursor-pointer"
        >
          <UISpinner v-if="props.isAuthLoading" />
          <span v-else>登录</span>
        </button></el-form-item
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, FormInstance } from "element-plus";
const emits = defineEmits(["onSubmit"]);
const props = defineProps<{ isRegistering: boolean; isAuthLoading: boolean }>();
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") callback(new Error("Please input the password"));
  if (value.length <= 6)
    callback(new Error("Please input more than 8 characters"));
};

const validateEmail = (rule: any, value: any, callback: any) => {
  if (props.isRegistering)
    if (value === "" || !value.includes("@"))
      callback(new Error("Please input the email"));
};

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === "" || value.length < 4)
    callback(new Error("Please input the username more than 4 characters"));
};

const ruleForm = reactive({
  username: "",
  email: "",
  pass: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  email: [{ validator: validateEmail, trigger: "blur" }],
  username: [{ validator: validateUsername, trigger: "blur" }],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl || props.isAuthLoading) return;
  formEl.validate();
  emits("onSubmit", ruleForm.email, ruleForm.pass, ruleForm.username);
};
</script>
