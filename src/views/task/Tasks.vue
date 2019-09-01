<template>
  <div class="tasks">
    <h1 class="title">{{$t('common.tasks')}}</h1>
    <tasks />
  </div>
</template>

<script>
import Tasks from '../../components/TasksList';

export default {
    components: {
        Tasks
    }
};
</script>

<style lang="scss" scoped>
.title {
    text-align: start;
    margin: 1rem 0.8rem;
}

.tasks {
    flex-direction: column;
    margin: 0 0.8rem;
}
</style>
