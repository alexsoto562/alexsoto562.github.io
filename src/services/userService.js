import axios from "axios";

var formsService = {
  endpoint: "https://api.remotebootcamp.dev/api/users/",
};

var formsServiceFriends = {
  endpoint: "https://api.remotebootcamp.dev/api/friends",
};

var searchEndpoint =
  "https://api.remotebootcamp.dev/api/friends/search?pageIndex=0&pageSize=5&q=";

var searchPageNumber = "https://api.remotebootcamp.dev/api/friends?pageIndex=";

var jobsService = {
  endpoint: "https://api.remotebootcamp.dev/api/jobs?pageIndex=0&pageSize=10"
}

let login = (payload) => {
  console.log("UserService.login is firing");
  const config = {
    method: "POST",
    url: `${formsService.endpoint}login`,
    data: payload,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let register = (payload) => {
  console.log("UserService.register is firing");
  const config = {
    method: "POST",
    url: `${formsService.endpoint}register`,
    data: payload,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getFriends = (index, size) => {
  console.log("formsService.friends is firing");
  const config = {
    method: "GET",
    url: `${formsServiceFriends.endpoint}?pageIndex=${index}&pageSize=${size}`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getFriendsPageNumber = (pageNumber) => {
  console.log("formsService.friends is firing");
  const config = {
    method: "GET",
    url: `${searchPageNumber}${pageNumber}&pageSize=5&q=`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };

  console.log("testing getFriendsPageNumber URL", config.url);
  return axios(config);
};

let deleteById = (personId) => {
  console.log("formsServiceFriends.deleteById", personId);
  const config = {
    method: "DELETE",
    url: `${formsServiceFriends.endpoint}/${personId}`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return personId;
  });
};

let add = (payload) => {
  console.log("formsService.add is firing");
  const config = {
    method: "POST",
    url: formsServiceFriends.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then((response) => {
    return { id: response.data.item, ...payload };
  });
};

let update = (id, payload) => {
  console.log("formsService.update is firing");
  const config = {
    method: "PUT",
    data: payload,
    url: `${formsServiceFriends.endpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(({ data }) => ({
    updateData: { ...payload },
    id: data.id,
  }));
};

let search = (searchVal) => {
  console.log(
    "userService.search is firing, should be my search word",
    searchVal
  );
  const config = {
    method: "GET",
    url: `${searchEndpoint}${searchVal}`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };
  console.log("testing url->", config.url);
  return axios(config);
};

let currentUser = () => {
  // console.log("userService.currentUser is firing");
  const config = {
    method: "GET",
    url: `${formsService.endpoint}current`,
    crossDomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let getById = (id) => {
  // console.log("formsService.getById is firing");
  const config = {
    method: "GET",
    url: `${formsService.endpoint}${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

let logout = ()=>
{
    console.log("formsService.logout is firing")
    const config = {
        method: "GET",
        url:`${formsService.endpoint}logout`,
        crossDomain:true,
        headers: {"Content-Type": "application/json"},
    };
    return axios(config)
}

let showJobs =()=>{
  console.log("showJobs is firing");
  const config = {
    method: "GET",
    url: jobsService.endpoint,
    crossDomain:true,
    headers: {"Content-Type": "application/json"},
  }
  return axios(config)
}


const userService = {
  login,
  register,
  getFriends,
  getFriendsPageNumber,
  deleteById,
  add,
  update,
  search,
  currentUser,
  getById,
  logout,
  showJobs
};

export default userService;