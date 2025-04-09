const { createApp, ref } = Vue

const app = createApp({
    setup() {
      const contador = ref(1)
      const novaTarefa = ref("")
      const tarefas = ref([])
      function cadastrarTarefa() { 
        tarefas.value.push({index: contador.value, texto: novaTarefa.value, status: false})
        novaTarefa.value = ""
        contador.value++;
      }

      return {
        contador,
        novaTarefa,
        tarefas,
        cadastrarTarefa
      }
    }
  }).mount('#app')
