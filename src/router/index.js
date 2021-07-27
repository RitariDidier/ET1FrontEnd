// Imports
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const routes = [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'pro',
          name: 'Pro',
          component: () => import('@/views/pro/Index.vue'),
          meta: { src: require('@/assets/pro.jpg') },
        },
        {
          path: 'perfil',
          name: 'Perfil',
          meta: { requiresAuth: true },
          component: () => import('@/views/perfil/perfilIndex.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/auth/loginIndex.vue'),
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/auth/registerIndex.vue'),
        },
        {
          path: '/recover',
          name: 'recover',
          component: () => import('@/views/auth/recoverIndex.vue'),
        },
        {
          path: '/viajes',
          name: 'viajes',
          meta: { requiresAuth: true },
          component: () => import('@/views/viajes/viajesIndex.vue'),
        },
        {
          path: '/bus',
          name: 'bus',
          meta: { requiresAuth: true },
          component: () => import('@/views/bus/busIndex.vue'),
        },
        {
          path: '/pasajes',
          name: 'pasajes',
          meta: { requiresAuth: true },
          component: () => import('@/views/pasajes/pasajesIndex.vue'),
        },
        {
          path: '/users',
          name: 'users',
          meta: { requiresAuth: true },
          component: () => import('@/views/users/usersIndex.vue'),
        },
      ],
    },

]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  // La ruta requiere autentificación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Continuamos con la navegación si el usuario esta autentificado
    if (store.getters.isAuthenticated) next()
    // En caso contrario lo enviamos al Login
    else next({ name: 'login' })
  } else {
    // Evitamos que un usuario logeado ingrese a alguna vista con el path auth
    if (store.getters.isAuthenticated && to.path.includes('auth')) {
      // En caso de ser así enviamos al usuario al Home
      next({ name: 'login' })
    } else {
        next()
      }
  }
})

export default router
