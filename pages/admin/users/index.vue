<template>
  <div>
    <h2>
      Usersテーブルの取得
    </h2>
    <table v-if="userLists.length">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, i) in userLists"
          :key="`user-${i}`"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ dateFormat(user.createdAt) }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else>
      ユーザーが取得できませんでした
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userLists: [], 
    }
  },
  async fetch() {
  const usersResponse = await this.$axios.get('/api/v1/users')
  console.log(usersResponse.data.users)

  const users = usersResponse.data.users.map(users => ({
    id: users.id,
    name: users.name,
    email: users.email,
    createdAt: users.created_at,
  }))
  this.userLists = users
},
  computed: {
      dateFormat () {
      return (date) => {
        const validDate = new Date(date);
        if (isNaN(validDate)) {
          return '';
        }
        
        const dateTimeFormat = new Intl.DateTimeFormat(
          'ja', { dateStyle: 'medium', timeStyle: 'short' }
        );
        return dateTimeFormat.format(validDate);
      };
    }
  }
}
</script>