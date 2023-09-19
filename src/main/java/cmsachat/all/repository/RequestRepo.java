package cmsachat.all.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Admin;
import cmsachat.all.models.Request;

@Repository
public interface RequestRepo extends JpaRepository<Request, Long> {

	public List<Request> findAllByUserId(Long id);
	public List<Request> findAllByUserCollaboratorManagerIdAndApproveManagerIsNull(Long id);
	//List<Request> findByUserCollaboratorManagerIdAndApproveManagerIsNull(Long managerId);

    List<Request> findAllByUserManagerManagerIdAndApproveManagerIsNull(Long managerId);

    default List<Request> findAllByUserCollaboratorManagerIdAndApproveManagerIsNullOrUserManagerIdAndApproveManagerIsNull(Long managerId) {
        List<Request> collaboratorRequests = findAllByUserCollaboratorManagerIdAndApproveManagerIsNull(managerId);
        List<Request> managerRequests = findAllByUserManagerManagerIdAndApproveManagerIsNull(managerId);
        collaboratorRequests.addAll(managerRequests);
        return collaboratorRequests;
    }
	public List<Request> findAllByGroupeNamegroupeAndApproveManagerIsTrueAndApproveUserAprovelIsNull(String groupename);
	
	
}
