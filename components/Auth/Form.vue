<template>
  <div class="mt-12 w-72">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules"
      ><el-form-item prop="phone">
        <el-input
          v-model="ruleForm.phone"
          type="phone"
          autocomplete="off"
          size="large"
          placeholder="Input Your Phone Number"
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
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
          class="w-full bg-green-350 py-1 rounded-lg text-white text-center"
          >登录</el-button
        ></el-form-item
      >
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm, ElFormItem, ElInput, FormInstance } from "element-plus";
const emits = defineEmits(["onSubmit"]);
const ruleFormRef = ref<FormInstance>();

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") callback(new Error("Please input the password"));
  if (value.length <= 6)
    callback(new Error("Please input more than 8 characters"));
};

const validatePhone = (rule: any, value: any, callback: any) => {
  if (value === "") callback(new Error("Please input the phone"));
};

const ruleForm = reactive({
  phone: "",
  pass: "",
});

const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  phone: [{ validator: validatePhone, trigger: "blur" }],
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) =>
    valid ? emits("onSubmit") : console.log("Fail to submit")
  );
};
</script>
