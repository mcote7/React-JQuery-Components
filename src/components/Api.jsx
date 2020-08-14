import React, {useState} from 'react';
import $ from 'jquery';

const Api = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState([]);

  const doFetch = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setResults(data))
    .then(setLoading(false))
    .catch(err => setError(err))
    console.log("error", error)
  };

  $(document).ready(function(){
    $(document).scroll(function(e){
    var v2 = Math.abs($('.response').position().top - $(window).height()/2);
    var v1 = $(this).scrollTop();
        if( v1 > v2 ){
        console.log('in');
        setLoading(true);
        setTimeout(() => {
          doFetch();
        }, 500);
      }
    });
    });

  return (
    <div className="apiContainer">
      <div className="response">
        {loading ? <h1>loading . . .</h1> : ''}
        {error.length > 0 ? <h1>error . . . </h1> : ''}
        {!loading && results.map(item => <li key={item.id}>{item.name}</li>)}
      </div>
    </div>
  );
}

export default Api;


//something