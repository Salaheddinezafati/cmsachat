package cmsachat.all.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cmsachat.all.exception.NotFoundException;
import cmsachat.all.models.Request;
import cmsachat.all.models.User;
import cmsachat.all.repository.RequestRepo;
import cmsachat.all.repository.UserRepo;
import jakarta.transaction.Transactional;

@Service
public class UserService {
	
	@Autowired
	private UserRepo repo;
	@Autowired
	private RequestRepo reporeq;
	
	
	public User findbyid(Long id) {
		return repo.findById(id).orElse(null);
	}
	
	 @Transactional
	    public User deleteUserById(Long id) {
	        // Check if the user exists
	        User user = repo.findById(id)
	                .orElseThrow(() -> new NotFoundException("User not found with ID: " + id));

	        // Delete the associated requests first
	        List<Request> requests = reporeq.findAllByUserId(user.getId());
	        requests.forEach(request -> reporeq.delete(request));

	        // Now delete the user
	        try {
	            repo.delete(user);
	            return user;
	        } catch (Exception e) {
	            // Log the exception to see if there are any errors during deletion
	            e.printStackTrace();
	            throw e; // Re-throw the exception to propagate it further if needed
	        }
	    }
	
	public Request findreqbyid(Long id) {
		return reporeq.findById(id).orElse(null);
	}

	public Request addreq(Request request) {
		
		User checkuser = findbyid(request.getUser().getId());
		
		//System.out.println(checkuser);
		//System.out.println(request);
		if(checkuser.getCollaborator()!=null ) {
			request.setUser(checkuser);
			request.setApproveManager(null);
			request.setApproveUserAprovel(null);
			//System.out.println(request);
			return reporeq.save(request);
		}
		else if(checkuser.getManager()!=null) {
			request.setUser(checkuser);
			request.setApproveManager(true);
			request.setApproveUserAprovel(null);
			//System.out.println(request);
			return reporeq.save(request);
		}
		else {
			System.out.println(request);
			return null;
		}
	}
	
	
	public List<Request> findReqByUser(Long id){
		User checkuser = findbyid(id);
		if(checkuser!=null) {
			return reporeq.findAllByUserId(id);
		}
		
		return null;
	}
	
	public List<Request> findReqByusermanager(Long id){
		User checkuser = findbyid(id);
		if(checkuser!=null) {
			return reporeq.findAllByUserCollaboratorManagerIdAndApproveManagerIsNull(id);
		}
		
		return null;
	}
	public List<Request> findAllByGroupeGroupenameAndApproveManagerIsTrueAndApproveUserAprovelIsNull(String groupename){
		
		return reporeq.findAllByGroupeNamegroupeAndApproveManagerIsTrueAndApproveUserAprovelIsNull(groupename);
		
	}
	
	public Request updateAproveManager(Long id) {
		
		Request checkReq = findreqbyid(id);
		if(checkReq!=null) {
			checkReq.setApproveManager(true);
			return reporeq.save(checkReq);
		}
		
		return null;
	}
	public Request updateNoAproveManager(Long id) {
		
		Request checkReq = findreqbyid(id);
		if(checkReq!=null) {
			checkReq.setApproveManager(false);
			return reporeq.save(checkReq);
		}
		
		return null;
	}
	public Request updateAproveUserAprove(Long id) {
		
		Request checkReq = findreqbyid(id);
		if(checkReq!=null && checkReq.getApproveManager().equals(true)) {
			checkReq.setApproveUserAprovel(true);
			return reporeq.save(checkReq);
		}
		
		return null;
	}
	public Request updateNoAproveUserAprove(Long id) {
		
		Request checkReq = findreqbyid(id);
		if(checkReq!=null && checkReq.getApproveManager().equals(true)) {
			checkReq.setApproveUserAprovel(false);
			return reporeq.save(checkReq);
		}
		
		return null;
	}
	
	public List<User> getallusermanager(String namerole){
		return repo.findAllByRoleNamerole(namerole);
	}
}
