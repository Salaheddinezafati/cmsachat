package cmsachat.all.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "groupe")
public class Groupe {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private long id;
	
	private String namegroupe;
	
	@OneToMany(mappedBy = "groupe")
	@JsonIgnore
	private List<Request> requests;
	
	@OneToMany(mappedBy = "groupe")
	@JsonIgnore
	private List<UserAprovel> useraprovals;
}
