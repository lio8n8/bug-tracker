<template>
  <div class="tasks">
    <div class="task-item" v-for="{id, type, title, priority, status} in tasks" :key="id">
      <img class="icon" :src="getImage(type)" :alt="type" />
      <router-link :to="`/tasks/${id}`" tag="span" class="task-id">{{id}}</router-link>
      <span class="task-title">{{title}}</span>
      <span class="task-priority" :class="priority.toLowerCase()">{{priority}}</span>
      <span class="task-status" :class="status.toLowerCase()">{{status}}</span>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [
                {
                    id: '3bbf4bf6-3c06-4dd6-819a-bb31379e9f64',
                    title: 'Deleniti nostrum non qui iusto.',
                    description:
                        'Ratione qui pariatur numquam tenetur animi voluptatem eveniet. Dolor consequatur at et facere. Ut ex eveniet incidunt perferendis eaque ea.',
                    priority: 'NORMAL',
                    type: 'TASK',
                    status: 'OPEN'
                },
                {
                    id: 'ccbf0dda-3866-4f74-82bf-755341df7945',
                    title: 'Sit voluptatem itaque corrupti laborum nostrum.',
                    description:
                        'Fuga optio dignissimos labore et commodi et voluptatibus. Est ipsum quidem et non omnis eligendi ut. Odio in eos veniam. Labore repellat doloremque nisi.',
                    priority: 'CRITICAL',
                    type: 'BUG',
                    status: 'OPEN'
                },
                {
                    id: '9db1e225-a84b-4917-b140-c4707df2feb3',
                    title: 'Perferendis exercitationem tempora qui.',
                    description:
                        'Commodi et nulla nihil labore. Sit qui nihil ut ex minus. Temporibus rerum similique accusamus sunt ut.',
                    priority: 'MAJOR',
                    type: 'TASK',
                    status: 'CLOSED'
                },
                {
                    id: 'eeecd144-71e6-47d1-9af1-45765e68c115',
                    title: 'Aspernatur sit laudantium.',
                    description:
                        'Et ut deleniti. Hic optio ullam ut aut veritatis. Aut corporis aut quibusdam eveniet. Corporis ad adipisci aut accusantium sunt voluptas.',
                    priority: 'NORMAL',
                    type: 'TASK',
                    status: 'OPEN'
                },
                {
                    id: 'f5059eee-33ed-4ec1-a699-e5298da84edd',
                    title: 'Doloribus repudiandae est eos omnis inventore.',
                    description:
                        'Quia recusandae distinctio dolorum. Qui voluptatem sed. Et doloremque cupiditate recusandae fuga explicabo molestiae iusto. Pariatur fugiat qui. Sed et tempore.',
                    priority: 'MINOR',
                    type: 'BUG',
                    status: 'OPEN'
                },
                {
                    id: '92f8e2cb-b73d-45c3-865f-2f21faa56d16',
                    title: 'Qui eius optio.',
                    description:
                        'Repellat odio voluptates omnis quos placeat. Cum soluta odit perferendis et nemo quasi sequi. Tempore tempora dolore sit natus. Vel debitis temporibus delectus doloremque temporibus amet et.',
                    priority: 'NORMAL',
                    type: 'PROPOSAL',
                    status: 'OPEN'
                },
                {
                    id: '0ef5ac1f-3b79-4103-8cae-76605488e259',
                    title: 'Possimus omnis eaque.',
                    description:
                        'Vitae maxime architecto nihil natus rem alias qui. Eius qui aut et eos delectus laboriosam dolorem. Quas quos eum inventore. Cum libero necessitatibus ullam sit.',
                    priority: 'NORMAL',
                    type: 'TASK',
                    status: 'OPEN'
                },
                {
                    id: '63a4bc56-aa57-42c0-b446-2e00d2e1f09e',
                    title:
                        'Aut sed veritatis consequatur dolorum facilis explicabo.',
                    description:
                        'Ab et iure id non adipisci. Et qui cupiditate rerum. Voluptatum sit eligendi ut voluptas nisi autem.',
                    priority: 'BLOCKER',
                    type: 'TASK',
                    status: 'OPEN'
                },
                {
                    id: '9349abc8-76c9-4845-adae-4f6d3cd0558f',
                    title: 'Aperiam fuga est odit error eligendi nesciunt vel.',
                    description:
                        'Aliquam et dolorem voluptas dolorem. Ut minima qui. Consequatur doloremque vel. Aperiam eligendi vel sit. Maiores voluptatum et natus inventore aut.',
                    priority: 'NORMAL',
                    type: 'TASK',
                    status: 'OPEN'
                },
                {
                    id: 'e4712a5f-8644-4b03-bdae-232291c300ac',
                    title:
                        'Eos voluptatem consequatur nostrum et ipsam ducimus.',
                    description:
                        'Voluptate nostrum consequatur in laudantium laborum repellendus. Incidunt qui minus qui omnis neque. Error nisi animi suscipit vitae.',
                    priority: 'NORMAL',
                    type: 'PROPOSAL',
                    status: 'OPEN'
                }
            ]
        };
    },
    methods: {
        getImage(type) {
            return require(`../assets/images/task-types/${type.toLowerCase()}.svg`);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/constants.scss';
@import '@/assets/scss/common.scss';

.tasks {
    display: flex;
    flex-direction: column;
    padding: 0.4rem;
    border: 1px solid $color-light-green-2;
    border-radius: 0.4rem;
}

.task-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $color-light-green-2;
    height: 3rem;
    padding: 0 0.5rem;

    &:hover {
        background-color: #646809;
        color: #FFF;
    }

    &:last-child {
        border-bottom: none;
    }
}

.task-id {
    width: 35%;
    text-align: start;
    &:hover {
        cursor: pointer;
    }
}

.task-title {
    width: 40%;
    text-align: start;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.task-type,
.task-priority {
    display: flex;
    color: #fff;
    padding: 0.2rem 0.4rem;
    border-radius: 0.4rem;
    font-size: 0.8rem;
    width: 4rem;
    justify-content: center;
}

.bug {
    background-color: $color-error;
}

.task {
    background-color: $color-light-blue;
}

.proposal {
    background-color: $color-light-green;
}

.normal {
    background-color: $color-light-green;
}

.minor {
    background-color: $color-light-yellow;
}

.major {
    background-color: $color-error;
}

.critical {
    background-color: $color-error-red;
}

.blocker {
    background-color: #000;
}

.icon {
    width: 1.8rem;
    height: 1.8rem;
}
</style>
