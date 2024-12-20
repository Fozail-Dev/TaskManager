<template>
  <section class="vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <h3 class="mb-5">Sign in</h3>

              <!-- Email Input -->
              <div class="form-outline mb-4">
                <input 
                placeholder="Enter Your Email"
                  type="email" 
                  id="typeEmailX-2" 
                  class="form-control form-control-lg" 
                  v-model="email" 
                  required
                />
              </div>

              <!-- Password Input -->
              <div class="form-outline mb-4">
                <input 
                  placeholder="Enter Your Password"
                  type="password" 
                  id="typePasswordX-2" 
                  class="form-control form-control-lg" 
                  v-model="password" 
                  required
                />
              </div>

              <!-- Remember Me Checkbox -->
              <div class="form-check d-flex justify-content-start mb-4">
                <input 
                  class="form-check-input" 
                  type="checkbox" 
                  v-model="rememberMe"
                  id="form1Example3" 
                />
                <label class="form-check-label" for="form1Example3"> Remember password </label>
              </div>

              <!-- Login Button -->
              <button 
                class="btn btn-primary btn-lg btn-block" 
                type="submit" 
                @click="submitLogin"
              >
                Login
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async submitLogin() {
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });
        
        if (response.data.success) {
          // Login successful, redirect to the tasks page
          localStorage.setItem('auth_token', response.data.token);
          this.$router.push({ name: 'tasks' });
        } else {
          alert('Invalid credentials!');
        }
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed!');
      }
    }
  }
};
</script>
