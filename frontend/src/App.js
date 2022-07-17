import React from 'react'
import Wrapper from './components/layout'
import Homepage from './components/homepage'
import ChildUniversity from './components/child-university'
import Services from './components/services'
import Topic from './components/topic'
import Questions from './components/questions'
import Register from './components/register'
import Dashboard from './components/dashboard'
import AddTopic from './components/dashboard/addTopic'
import JobApplication from './components/job-application'
import PageOne from './components/homepage/pageOne'
import PageTwo from './components/homepage/pageTwo'
import PageThree from './components/homepage/pageThree'
import PageFour from './components/homepage/pageFour'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store} >
        <Wrapper>
            <Routes>
              <Route path="/child-university" element={<ChildUniversity />} />
              <Route path="/services" element={<Services />} />
              <Route path="/topic/:id" element={<Topic />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/register/:title" element={<Register />} />
              <Route path="/jobApplication" element={<JobApplication />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addTopic" element={<AddTopic />} />
              <Route path="/" element={<Homepage />} >
                <Route path="pageOne" element={<PageOne />} />
                <Route path="pageTwo" element={<PageTwo />} />
                <Route path="pageThree" element={<PageThree />} />
                <Route path="pageFour" element={<PageFour />} />
              </Route>

            </Routes>
        </Wrapper>
      </Provider>
    </BrowserRouter>
   
  );
}

export default App;
