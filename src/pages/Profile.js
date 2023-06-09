import { useEffect, useState } from 'react'

import { FaUserAlt } from 'react-icons/fa';

import moment from 'moment'; // for date format

import { connect, useDispatch } from 'react-redux';
import { profile, editActions } from '../api/actions/actions'

const Profile = ({ user, error, fetchProfile }) => {

  useEffect(() => {
    fetchProfile()
  }, [])

  const [isDisabled, setIsDisabled] = useState(true)

  const dispatch = useDispatch()

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [gender, setGender] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')

  const handleEdit = () => {
    dispatch(editActions(firstname, lastname, gender, mobile, address))
    console.log(firstname, lastname, gender, mobile, address)
  }

  return (
    <div className='w-full bg-white py-10 px-4 mt-[60px]'>
      {error && <div>{error}</div>}
      {user ? (<div className='max-w-[1240px] mx-auto'>
        <h1 className='text-2xl font-bold text-gray-800'>User Information</h1>
        <div className='flex flex-col md:flex-row mt-10'>
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img className="h-auto w-full mx-auto" src="../assets/logo.png" alt="" />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user.firstname} {user.lastname}</h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">Owner at Her Company Inc.</h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    {user.isBlocked ? <span className="bg-red-500 py-1 px-2 rounded text-white text-sm"> Blocked</span> : <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span>}
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">{moment(user.createdAt).format('DD/MM/YYYY')}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64 border-t-4 border-green-400">
            <div className="bg-white p-3 shadow-2xl rounded-sm ">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <FaUserAlt className='text-2xl text-black-500' />
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <input className='px-4 py-2' defaultValue={user.firstname} disabled={isDisabled} onChange={(e) => setFirstname(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <input className='px-4 py-2' defaultValue={user.lastname} disabled={isDisabled} onChange={(e) => setLastname(e.target.value)}/>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <input className='px-4 py-2' defaultValue={user.gender} disabled={isDisabled} onChange={(e) => setGender(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <input className='px-4 py-2' defaultValue={user.mobile} disabled={isDisabled} onChange={(e) => setMobile(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Current Address</div>
                    <input className='px-4 py-2' defaultValue={user.address} disabled={isDisabled} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Permanant Address</div>
                    <input className='px-4 py-2' disabled={isDisabled} />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <input className='px-4 py-2' defaultValue={user.email} disabled />
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <input className='px-4 py-2' disabled={isDisabled} />
                  </div>
                </div>
                {isDisabled ? <button className='bg-green-500 text-white px-4 py-2 rounded-lg' onClick={() => setIsDisabled(!isDisabled)}>Edit</button>
                  : <button className='bg-green-500 text-white px-4 py-2 rounded-lg' type='submit' onClick={handleEdit} >Save</button>}
              </div>
            </div>
          </div>
        </div>
      </div>) : ''}
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => dispatch(profile())
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)