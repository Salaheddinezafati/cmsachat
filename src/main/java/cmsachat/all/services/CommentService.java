package cmsachat.all.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cmsachat.all.models.Comment;
import cmsachat.all.repository.CommentRepo;

@Service
public class CommentService {
	
	@Autowired
	private CommentRepo commentRepo;
	
	public Comment savecommnet(Comment comment) {
		return commentRepo.save(comment);
	}
	public Comment getbycommentreq(Long id) {
		return commentRepo.findByRequestId(id);
	}
	public List<Comment> getallcomment() {
		return commentRepo.findAll();
	}
}
