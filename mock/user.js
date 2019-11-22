let initId = 1;

let id = 1;
const users = [
  {
    id,
    name: 'hewei',
  },
];

const rest = function(data) {
  this.end(JSON.stringify(data));
};

export default {
  'GET /api/user': { users },

  'POST /api/user/create': (req, res) => {
    const { name } = req.body, id = ++initId;
    users.push({ id, name });
    rest.bind(res)({ users });
  },

  'POST /api/user/delete': (req, res) => {
    const { id } = req.body;
    let i = 0;
    for (i = 0; i < users.length; i++) {
      if (users[i].id === id)
        break;
    }
    users.splice(i, 1);

    rest.bind(res)({ users });
  },
};
