const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      planets: [],
      people: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      addFavorite: (item, link) => {
        const store = getStore();
        item["link"]=link
        store.favorites.push(item);
        setStore(store);
      },

      getPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((result) => {
            setStore({ planets: result.results });
            console.log("result");
          })
          .catch((error) => console.log("error", error));
      },

      getPeople: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((result) => {
            setStore({ people: result.results });
            console.log("result");
          })
          .catch((error) => console.log("error", error));
      },

      getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((result) => {
            setStore({ vehicles: result.results });
            console.log("result");
          })
          .catch((error) => console.log("error", error));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
