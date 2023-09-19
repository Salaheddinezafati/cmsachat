package cmsachat.all.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cmsachat.all.models.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long> {
	
	public Comment findByRequestId(Long id);

}
